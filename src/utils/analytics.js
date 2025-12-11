import ReactGA from 'react-ga4';
import ReactPixel from 'react-facebook-pixel';
import { v4 as uuidv4 } from 'uuid';

// In production (Vercel), this points to the serverless function
const CAPI_ENDPOINT = '/api/events';

export const initAnalytics = () => {
    const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

    if (GA_ID) {
        ReactGA.initialize(GA_ID);
        console.log('GA4 Initialized');
    }

    if (PIXEL_ID) {
        ReactPixel.init(PIXEL_ID);
        ReactPixel.pageView();
        console.log('Pixel Initialized');
    }

    if (!GA_ID && !PIXEL_ID) {
        console.log('Analytics: No IDs provided in .env, running in mock mode');
    }
};

// Helper function to get Facebook cookies for deduplication
const getFacebookCookies = () => {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    return {
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc')
    };
};

export const trackEvent = async (eventName, params = {}, userData = {}) => {
    const eventId = uuidv4();
    const eventSourceUrl = window.location.href;
    const fbCookies = getFacebookCookies();

    // 1. Google Analytics 4
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
        ReactGA.event({
            category: params.category || 'User Interaction',
            action: eventName,
            label: params.label,
            value: params.value,
        });
    }

    // 2. Facebook Pixel (Browser) - with eventID for deduplication
    if (import.meta.env.VITE_FACEBOOK_PIXEL_ID) {
        ReactPixel.track(eventName, { ...params, eventID: eventId });
    }

    // 3. Facebook CAPI (Server) - with same eventID for deduplication
    try {
        await fetch(CAPI_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventName,
                eventId, // Same ID as browser pixel for deduplication
                eventSourceUrl,
                userData: {
                    ...userData,
                    fbp: fbCookies.fbp, // Facebook browser cookie
                    fbc: fbCookies.fbc  // Facebook click cookie
                },
                customData: params,
            }),
        });
        console.log(`✅ Event "${eventName}" sent with ID: ${eventId}`);
    } catch (error) {
        console.warn('⚠️ CAPI Error:', error.message);
    }
};

export const trackPageView = () => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
    if (import.meta.env.VITE_FACEBOOK_PIXEL_ID) {
        ReactPixel.pageView();
    }
};

// ========== LEAD TRACKING FUNCTIONS ==========

/**
 * Track when user clicks on contact CTA
 */
export const trackContactClick = (source = 'unknown') => {
    trackEvent('Contact', {
        category: 'Lead Generation',
        label: source,
        source: source,
        action: 'click_contact_button'
    });
};

/**
 * Track when user clicks on booking/scheduling CTA
 */
export const trackBookingClick = (source = 'unknown') => {
    trackEvent('Schedule', {
        category: 'Lead Generation',
        label: source,
        source: source,
        action: 'click_booking_button'
    });
};

/**
 * Track when user clicks on calculator CTA
 */
export const trackCalculatorClick = (source = 'unknown') => {
    trackEvent('ViewContent', {
        category: 'Lead Generation',
        label: source,
        content_name: 'Budget Calculator',
        source: source,
        action: 'click_calculator_button'
    });
};

/**
 * Track when user submits contact form
 */
export const trackContactFormSubmit = (formData = {}) => {
    trackEvent('Lead', {
        category: 'Lead Generation',
        label: 'Contact Form',
        form_type: 'contact',
        ...formData
    }, {
        email: formData.email,
        phone: formData.phone
    });
};

/**
 * Track when user completes booking
 */
export const trackBookingComplete = (bookingData = {}) => {
    trackEvent('Lead', {
        category: 'Lead Generation',
        label: 'Booking Complete',
        form_type: 'booking',
        ...bookingData
    }, {
        email: bookingData.email,
        phone: bookingData.phone
    });
};

/**
 * Track when user generates a demo
 */
export const trackDemoGenerated = (demoData = {}) => {
    trackEvent('GenerateLead', {
        category: 'Lead Generation',
        label: 'Demo Generated',
        business_type: demoData.businessType,
        design_style: demoData.designStyle,
        color_scheme: demoData.colors
    });
};

/**
 * Track when user downloads demo
 */
export const trackDemoDownload = () => {
    trackEvent('Download', {
        category: 'Engagement',
        label: 'Demo Download',
        content_type: 'demo_mockup'
    });
};

/**
 * Track calculator result view
 */
export const trackCalculatorResult = (budget = 0) => {
    trackEvent('ViewContent', {
        category: 'Engagement',
        label: 'Calculator Result',
        value: budget,
        currency: 'COP'
    });
};

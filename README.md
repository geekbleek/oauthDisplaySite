# oauth Display Site

This webpage will display a "code" query parameter in the UI, and offer a button to copy to clipboard.

Useful for debugging OAuth applications, or having a permanent re-direct URL for your OAuth integrations where user's can collect the code, and leverage it server-side where they would prefer not to expose their services.

Because the authorization code must be exchanged with an OAuth service for an access token by an API call containing the integration's client secret, the code shown on this page is no value unless you have the client secret, so displaying it to users should not be a security concern.
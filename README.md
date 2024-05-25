# [Google Identity Services](https://developers.google.com/identity/gsi/web/guides/overview) + Angular 18 + Popup/Redirect demo 

Complete e2e demo of an integration with **Sign in with Google** using [GSI](https://developers.google.com/identity/gsi/web/guides/client-library) and .NET 8.0 Web API (server-side)

**Includes:** 
- Sign In
- Token relay to server *(for redirect it requires post server-side)*
- Token validation server-side
- JWT setup in Web Api
- Identity managed in NgRx Signal Store
- ~~[_provideExperimentalZonelessChangeDetection_](https://netbasal.com/navigating-the-new-era-of-angular-zoneless-change-detection-unveiled-e7404de69b89)~~ _Causes issues with [GSI_LOGGER]: Parameter client_id is not set correctly._

Designed as a skeleton project that can help bootstrap a new application with minimal changes

### Configuration Required after Google setup

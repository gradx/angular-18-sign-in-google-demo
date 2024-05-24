# Angular 18 + Google Identity demo 

Complete e2e demo of an integration with Sign in with Google using [GSI](https://developers.google.com/identity/gsi/web/guides/overview) and .NET 8.0 Web API (server)

**Includes:** 
- Sign In
- Token relay to server *(for redirect it posts server-side to login-result)*
- Token validation server-side
- JWT setup in Web Api
- Identity managed in NgRx Signal Store
- ~~[_provideExperimentalZonelessChangeDetection_](https://netbasal.com/navigating-the-new-era-of-angular-zoneless-change-detection-unveiled-e7404de69b89)~~ _Intermittment issues found with GSI and client_id not found errors_

Designed as a skeleton project that can help bootstrap a new application with minimal changes

### Configuration Required after Google setup

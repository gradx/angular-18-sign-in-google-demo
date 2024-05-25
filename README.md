# [Google Identity Services](https://developers.google.com/identity/gsi/web/guides/overview) + Angular 18 + Popup/Redirect demo 

Complete e2e demo of an integration with **Sign in with Google** using [GSI](https://developers.google.com/identity/gsi/web/guides/client-library) and .NET 8.0 Web API (server-side)

**Includes:** 
- Token validation server-side
- JwtSecurityTokenHandler & Claims managed server-side
- Identity managed in NgRx Signal Store + Session storage
- ~~[_provideExperimentalZonelessChangeDetection_](https://netbasal.com/navigating-the-new-era-of-angular-zoneless-change-detection-unveiled-e7404de69b89)~~ _Causes issues with [GSI_LOGGER]: Parameter client_id is not set correctly._

Designed as a skeleton project that can help bootstrap a new application with minimal changes

To handle the callback events from `data-callback="handleResponse"`

```            
declare global {
  interface Window {
    handleResponse: (response: any) => void;
    ...
  }
}

window.handleResponse = (response: any) => { 
   ...
}


```

add the handlers to [main.ts](https://github.com/gradx/angular-18-sign-in-google-demo/blob/main/Angular18-Google-Sign-In/src/main.ts)

and for Redirect URI `https://localhost:7109/login-result` [server side](https://github.com/gradx/angular-18-sign-in-google-demo/blob/main/DotNet8MinimalApiJWT/DotNet8MinimalApiJWT/Program.cs): 
```
app.MapPost("/login-result", [AllowAnonymous] async (HttpContext context) =>
{
    var form = await context.Request.ReadFormAsync();
    var result = await ValidateToken(form["credential"]!);

    context.Response.Redirect($"http://localhost:4200/login-result?jwt={result}");
});
```



### Configuration Required (environment.ts / environment.development.ts)
`google_client_id: '222000842037-qrfms25as5b680051uia4u6g3t60bgef.apps.googleusercontent.com'`

### Default Startup Page
 The default page will provide you with the following two sign in options (Can't render both buttons in the same page): 
![Redirect](https://github.com/gradx/angular-18-sign-in-google-demo/blob/main/docs/images/Redirect.png 'Redirect')

![Popup](https://github.com/gradx/angular-18-sign-in-google-demo/blob/main/docs/images/Popup.png 'Popup')

and after succcessfully signing in

![Profile](https://github.com/gradx/angular-18-sign-in-google-demo/blob/main/docs/images/Profile.png 'Profile')

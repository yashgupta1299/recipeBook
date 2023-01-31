### Tranform Angular App to Angular Universal as it helps in indexing

1.a run in a terminal:
"ng add @nguniversal/express-engine --project {{project name(in angular.json)}}"

1.b make sure to take care of browser related things because it can be accesed in browser only not in server like localStorage

1.c run
"npm run build:ssr"

1.d run on server for starting
"npm run serve:ssr"

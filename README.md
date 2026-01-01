Avraham Zoref
Galil
318406691

run with: node app.js
endpoints: 
post("/auth/register") body with name and password
get(/users/me") auth with headers, no body required
post("messages/encrypt")auth with headers, requried body with{ "message":<your messeages>, "cipherType": "reverse" }
post("messages/decrypt")auth with headers, requried body with { "messageId": <id of messages> }
i used supabase and mongodb becuese its easier for me to do it with clouds instead of locals and i practipated that more than mysql2
 

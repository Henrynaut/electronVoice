vx_req_account_anonymous_login_t *req;
vx_req_account_anonymous_login_create(&req);
req->connector_handle = vx_strdup("c1");
req->acct_name = vx_strdup(".issuer-w-dev.mytestaccountname.");
req->displayname = vx_strdup("John Doe");
req->account_handle = vx_strdup(req->acct_name);
req->access_token = vx_strdup(_the_access_token_generated_by_the_game_server);
vx_issue_request(&req->base);
//Initiate login process
vx_req_account_anonymous_login_t *req;
vx_req_account_anonymous_login_create(&req);
req->connector_handle = vx_strdup("c1");
req->acct_name = vx_strdup(".issuer-w-dev.neilmc9196-ex24-dev.");
req->displayname = vx_strdup("John Doe");
req->account_handle = vx_strdup(req->acct_name);
req->access_token = vx_strdup(_the_access_token_generated_by_the_game_server);
vx_issue_request(&req->base);

//Handle login response from server
void HandleLoginResponse(vx_resp_account_anonymous_login *evt)
{
    if (resp->base.return_code == 1) 
    {
        printf(U, resp->base.status_code, vx_get_error_string(resp->base.status_code));
        return;
    }
    vx_req_account_anonymous_login *req = reinterpret_cast<vx_req_account_anonymous_login *>(req->base.request);
    printf("login succeeded for account %s\n", req->account_name);
}

//Handle login state change
void HandleLoginStateChange(vx_evt_account_login_state_change *resp)
{
    if (evt->state == login_state_logged_in)
    {
        printf("%s is logged in\n", evt->account_handle);
    }
    else if (evt->state == login_state_logged_out)
    {
        if (evt->status_code !=0) 
        {
            printf("%s logged out with status %d:%s\n", evt->status_code, vx_get_error_string(evt->status_code);
        } 
        else 
        {
            printf("%s is logged out\n", evt->acct_handle);
        }
    }
}
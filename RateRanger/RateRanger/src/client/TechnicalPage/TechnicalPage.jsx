import './Technical.css'

const TechnicalPage = () => {
    return (
        <body class="">
  <div class="container on">
    <div class="screen">
      <h2 className="welcome-title">
        CONNECTION ESTABLISHED
      </h2>
      <div class="box--outer">
        <div class="box">
          <div class="box--inner">
            <div class="content">
              <div class="holder">
                <b>Welcome to QUADRA</b> — the high-performance automotive solutions with&nbsp;a&nbsp;soul. Please enter your
                QUADRA VIP user credentials.
                <br>
                <br>
                <div class="row">
                  <div class="col col__left label">
                    Login
                  </div>
                  <div class="col col__center">
                    <input type="text" id="login" maxlength="32" value="QUADRA V-TECH" readonly>
                        </input>
                  </div>
                </div>
                <form method="post" action="/password">
                  <div class="row">
                    <div class="col col__left label">
                      Password
                    </div>
                    <div class="col col__center">
                      <input type="password" id="password" name="password" required="required" placeholder="" data-error="" maxlength="32" autocomplete="new-password"
                        autofocus="true" />
                    </div>
                  </div>
                </form>
                  <div class="row">
                    <button type="submit" id="submit" name="submit">[login]</button>
                  </div>
                </br>
            <div class="holder">
                <b>Welcome to QUADRA</b> — the high-performance automotive solutions with&nbsp;a&nbsp;soul. Please enter your
                QUADRA VIP user credentials.
                <br />
                <br />
                <div class="row">
                    <div class="col col__left label">
                        Login
                    </div>
                    <div class="col col__center">
                        <input type="text" id="login" maxlength="32" value="QUADRA V-TECH" readonly />
                    </div>
                </div>
                <form method="post" action="/password">
                    <div class="row">
                        <div class="col col__left label">
                            Password
                        </div>
                        <div class="col col__center">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required="required"
                                placeholder=""
                                data-error=""
                                maxlength="32"
                                autocomplete="new-password"
                                autofocus="true"
                            />
                        </div>
                    </div>
                </form>
            </div>
            </br>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

</body>
    );
};

export default TechnicalPage;

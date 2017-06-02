package com.coats.trims.meta.springBootSeed;
import java.security.Principal;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.auth0.Auth0User;
import com.auth0.SessionUtils;
@Controller
public class HomeController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private AppConfig appConfig;

    @Autowired
    public HomeController(AppConfig appConfig) {
        this.setAppConfig(appConfig);
    }

    @RequestMapping(value="/portal/home", method = RequestMethod.GET)
    protected String home(final Map<String, Object> model, final HttpServletRequest request, final Principal principal) {
        logger.info("Home page");
        final Auth0User user = SessionUtils.getAuth0User(request);
        model.put("user", user);
        return "home";
    }

	public AppConfig getAppConfig() {
		return appConfig;
	}

	public void setAppConfig(AppConfig appConfig) {
		this.appConfig = appConfig;
	}

}


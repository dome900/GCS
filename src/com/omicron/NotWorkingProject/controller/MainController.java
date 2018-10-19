package com.omicron.NotWorkingProject.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import com.omicron.NotWorkingProject.model.object.Playground;



@CrossOrigin
@Controller
public class MainController extends AbstractController {	
	

        @Override
        public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response)  {

                       ModelAndView mav = new ModelAndView();
                       
                      // Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
                      // String currentPrincipalName = authentication.getName();   
                      // System.out.println("currentPrincipalName:"+currentPrincipalName);
                       
                       try {
	                     
	                      
	                    
	                    	   mav.setViewName("index.html");
	                    
	                       
	                       
	   
                       } catch (Exception ex) {
                    	   mav.addObject("errMsg", ex.getLocalizedMessage());
                       }    
                       return mav;
        }


//        public boolean isAjaxRequest (HttpServletRequest request) {
//                       if (request.getHeader("X-Requested-With")!=null && request.getHeader("X-Requested-With").equalsIgnoreCase("XMLHttpRequest")) {
//                                       return true;
//                       } else {
//                                       return false;
//                       }
//        }

        @Override
        protected ModelAndView handleRequestInternal(HttpServletRequest request,  HttpServletResponse response) throws Exception {
                       return null;
        }

		/*
        @ExceptionHandler(Exception.class)
  	  public ModelAndView handleError(HttpServletRequest req, Exception ex) {
  	  

  	    ModelAndView mav = new ModelAndView();
  	    mav.addObject("exception", ex);
  	    mav.addObject("url", req.getRequestURL());
  	    mav.setViewName(mav.getViewName());
  	    return mav;
  	  }
*/

   public void getWindowsAuth () {
	   
	   //Scenario 1: Logon a user and get his domain and local groups
	   //This calls Win32-LogonUser, checks the user token and extracts all local domain information.
/*
	   IWindowsAuthProvider prov = new WindowsAuthProviderImpl();
	   IWindowsIdentity identity = prov.logonUser("userName", "pwd");
	   System.out.println("User identity: " + identity.getFqn());
	   for(IWindowsAccount group : identity.getGroups()) {
	   System.out.println(" " + group.getFqn() + " (" + group.getSidString() + ")");
	   }
	*/   
	   
   }

	
	

}

package com.omicron.NotWorkingProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.util.UriComponentsBuilder;

import com.omicron.NotWorkingProject.model.DAO.PlayDAO;
import com.omicron.NotWorkingProject.model.object.Playground;
@CrossOrigin
@RestController
public class PlaygroundController extends MainController{
	@Autowired
	PlayDAO playDAO;

	@RequestMapping(value="/user", method = RequestMethod.GET, headers = "Accept=application/json")
	public ResponseEntity<List<Playground>> listAllUser() {
		List<Playground> list = playDAO.getLista();
		System.out.println("prova");
		if (list.size() == 0) {
			return new ResponseEntity<List<Playground>>(HttpStatus.NO_CONTENT);
			
		}

		return new ResponseEntity<List<Playground>>(list, HttpStatus.OK);
		
	}

	 @RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<Playground> getUser(@PathVariable("id") int id) {
	        System.out.println("Fetching User with id " + id);
	        Playground playground = playDAO.findById(id);
	        if (playground == null) {
	            System.out.println("User with id " + id + " not found");
	            return new ResponseEntity<Playground>(HttpStatus.NOT_FOUND);
	        }
	        return new ResponseEntity<Playground>(playground, HttpStatus.OK);
	    }
	
	 @RequestMapping(value = "/user/", method = RequestMethod.POST)
	    public ResponseEntity<Void> createUser(@RequestBody Playground playground) {
	        System.out.println("Creating User " + playground.getNomeUtente());
	  
	        if (playDAO.isUserExist(playground) != null) {
	            System.out.println("A User with name " + playground.getNomeUtente() + " already exist");
	            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
	        }
	  
	        playDAO.saveUser(playground);
			return null;
	  
	       
	    }
	
	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Playground> updateUser(@PathVariable("id") int id, @RequestBody Playground playground) {
        System.out.println("Updating User " + id);
          
        Playground currentUser = playDAO.findById(id);
          
        if (currentUser==null) {
            System.out.println("User with id " + id + " not found");
            return new ResponseEntity<Playground>(HttpStatus.NOT_FOUND);
        }
  
        currentUser.setNomeUtente(playground.getNomeUtente());
        currentUser.setCognomeUtente(playground.getCognomeUtente());
        currentUser.setIndirizzoUtente(playground.getIndirizzoUtente());
        currentUser.setCodiceFiscaleUtente(playground.getCodiceFiscaleUtente());
        currentUser.setCellulareUtente(playground.getCellulareUtente());
        currentUser.setEmailUtente(playground.getEmailUtente());
        
          System.out.println(currentUser.getNomeUtente().toString());
        playDAO.updateUser(currentUser);
        return null;
    }

	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Playground> deleteUser(@PathVariable("id") int id) {
        System.out.println("Fetching & Deleting User with id " + id);
  
        Playground user = playDAO.findById(id);
        if (user == null) {
            System.out.println("Unable to delete. User with id " + id + " not found");
            return new ResponseEntity<Playground>(HttpStatus.NOT_FOUND);
        }
  
        playDAO.deleteUserById(id);
        return new ResponseEntity<Playground>(HttpStatus.NO_CONTENT);
    }
	

}

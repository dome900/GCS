package com.omicron.NotWorkingProject.model.DAO;

import java.util.List;



import com.omicron.NotWorkingProject.model.object.Playground;




public interface PlayDAO {
	
	public List<Playground> getLista();
	public Playground findById(int id);
	public Playground getUsername();
	public Playground updateUser(Playground user);
	public Playground isUserExist(Playground user);
	public void saveUser(Playground user);
	public void deleteUserById(int id);
}

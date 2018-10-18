package com.omicron.NotWorkingProject.model.object;

import java.io.Serializable;

public class Playground implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String nomeUtente;
	private String cognomeUtente;
	private String indirizzoUtente;
	private String codiceFiscaleUtente;
	private String cellulareUtente;
	private String emailUtente;

	private int idUtente;
	
	
	public String getNomeUtente() {
		return nomeUtente;
	}
	public void setNomeUtente(String nomeUtente) {
		this.nomeUtente = nomeUtente;
	}
	public String getCognomeUtente() {
		return cognomeUtente;
	}
	public void setCognomeUtente(String cognomeUtente) {
		this.cognomeUtente = cognomeUtente;
	}
	public String getIndirizzoUtente() {
		return indirizzoUtente;
	}
	public void setIndirizzoUtente(String indirizzoUtente) {
		this.indirizzoUtente = indirizzoUtente;
	}
	public String getCodiceFiscaleUtente() {
		return codiceFiscaleUtente;
	}
	public void setCodiceFiscaleUtente(String codiceFiscaleUtente) {
		this.codiceFiscaleUtente = codiceFiscaleUtente;
	}
	public String getCellulareUtente() {
		return cellulareUtente;
	}
	public void setCellulareUtente(String cellulareUtente) {
		this.cellulareUtente = cellulareUtente;
	}
	public String getEmailUtente() {
		return emailUtente;
	}
	public void setEmailUtente(String emailUtente) {
		this.emailUtente = emailUtente;
	}

	public int getIdUtente() {
		return idUtente;
	}
	public void setIdUtente(int idUtente) {
		this.idUtente = idUtente;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	

}

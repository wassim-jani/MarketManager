package tn.enig.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Produit {
	
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer numero;
	private Integer quantite;
	private String description,Date;
	private float prixAchat,prixVente;
	@ManyToOne
	@JoinColumn(name="mag_id")
	private Magasin magasin;
	
	
	
	
	public Produit() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Produit(Integer numero, Integer quantite, String description, String date, float prixAchat, float prixVente,
			Magasin magasin) {
		super();
		this.numero = numero;
		this.quantite = quantite;
		this.description = description;
		Date = date;
		this.prixAchat = prixAchat;
		this.prixVente = prixVente;
		this.magasin = magasin;
	}
	public Integer getNumero() {
		return numero;
	}
	public void setNumero(Integer numero) {
		this.numero = numero;
	}
	public Integer getQuantite() {
		return quantite;
	}
	public void setQuantite(Integer quantite) {
		this.quantite = quantite;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public float getPrixAchat() {
		return prixAchat;
	}
	public void setPrixAchat(float prixAchat) {
		this.prixAchat = prixAchat;
	}
	public float getPrixVente() {
		return prixVente;
	}
	public void setPrixVente(float prixVente) {
		this.prixVente = prixVente;
	}
	public Magasin getMagasin() {
		return magasin;
	}
	public void setMagasin(Magasin magasin) {
		this.magasin = magasin;
	}
	
	
	
}

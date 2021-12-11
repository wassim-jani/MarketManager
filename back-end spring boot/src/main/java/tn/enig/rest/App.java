package tn.enig.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.enig.dao.IMagasin;
import tn.enig.dao.IProduit;
import tn.enig.model.Magasin;
import tn.enig.model.Produit;

@RestController
@CrossOrigin("*")
public class App {

	@Autowired
	IProduit pro;
	
	@Autowired
	IMagasin mag;
	
	
	public void setMag(IMagasin mag) {
		this.mag = mag;
	}
	
	public void setPro(IProduit pro) {
		this.pro = pro;
	}
	
	@GetMapping("/magasin")
	public List<Magasin> getAllMagasin(){
		return mag.findAll();
	}
	
	@GetMapping("/produit/{id}")
	public List<Produit> getAllProduitByMagasin(@PathVariable Integer id){
		return pro.getAllProduitByMagasin(id);
		
	}
	
	
	@PostMapping("/ajoutProduit")
	public void fn3(@RequestBody Produit prod) {
		pro.save(prod);
	}
	
	@DeleteMapping("/deleteProduit/{id}")
	public void fn3(@PathVariable("id") int id) {
		pro.deleteById(id);
	}
	 
}

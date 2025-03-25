package com.E_comm.myWebsite.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.E_comm.myWebsite.Model.Product;
import com.E_comm.myWebsite.Services.ProductService;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/api")
public class ProductController {
	@Autowired
	private ProductService service;
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getProducts()
	{
		 List<Product> products = service.getAllProducts();
		return  new ResponseEntity<List<Product>>(products,HttpStatus.OK);
		
	}
	@GetMapping("/products/{productId}")
	public ResponseEntity<Product>  getProductById(@PathVariable int productId)
	{
		Product product=service.getProductById(productId);
		if(product!=null)
		{
			return new ResponseEntity<Product>(product,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@PostMapping("/products")
	public ResponseEntity<?> addProduct(@RequestPart("product") Product p,
										@RequestPart(value = "image", required = false) MultipartFile img )
	{
		try {
			System.out.println(img);
		    Product savedProduct = service.addProduct(p,img);
		    System.out.println(savedProduct);
		    return new ResponseEntity<>(savedProduct,HttpStatus.CREATED);
		}
		catch(Exception e)
		{
		    System.out.println("Post not working I guess....");
		    return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@PutMapping("/products/update/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable int id,@RequestPart("product") Product p,
			@RequestPart(value = "image", required = false) MultipartFile img )
	{
		try {
		    Product savedProduct = service.updateProduct(id,p,img);
		    System.out.println(savedProduct);
		    return new ResponseEntity<>(savedProduct,HttpStatus.CREATED);
		}
		catch(Exception e)
		{
			 System.out.println("Put not working I guess....");
		    
		    return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@DeleteMapping("/products/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable int id)
	{
		Product p = service.deleteProduct(id);
		if(p==null)
		{
			return new ResponseEntity<>("Product doesn't Exist !",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>("Product deleted successfuly !",HttpStatus.OK);
	}
	@GetMapping("/products/{id}/image")
	public ResponseEntity<?> getImage(@PathVariable int id)
	{
		Product p= service.getProductById(id);
		if(p==null)
		{
			return new ResponseEntity<>("Product does not exist",HttpStatus.NOT_FOUND);
		}

/*	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.IMAGE_JPEG); // Change to IMAGE_PNG if needed*/
		return new ResponseEntity<>(p.getImageDate(),HttpStatus.FOUND);
	}
	
	@Override
	public String toString() {
		return "ProductController [service=" + service + "]";
	}
}

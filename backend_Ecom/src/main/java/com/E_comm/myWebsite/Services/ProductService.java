package com.E_comm.myWebsite.Services;

import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.E_comm.myWebsite.Model.Product;
import com.E_comm.myWebsite.Repo.RepoProducts;

@Service
public class ProductService {
	
	private RepoProducts repo;
	
	public ProductService(RepoProducts repo)
	{
		this.repo=repo;
	}

	@Override
	public String toString() {
		return "ProductService [repo=" + repo + "]";
	}

	public List<Product> getAllProducts()
	{
		
		return repo.findAll();
	}
	public Product deleteProduct(int id)
	{
		Product p=repo.findById(id).orElse(null);
		repo.deleteById(id);
		return p;
	}
	public Product getProductById(int id)
	{
		return repo.findById(id).orElse(null);
	}
	public Product addProduct(Product p,MultipartFile img) throws IOException
	{
		p.setImageName(img.getOriginalFilename());
		p.setImageType(img.getContentType());
		p.setImageDate(img.getBytes());
		return repo.save(p);
	}
	public Product updateProduct(int id,Product p,MultipartFile img) throws IOException
	{
		p.setImageName(img.getOriginalFilename());
		p.setImageType(img.getContentType());
		p.setImageDate(img.getBytes());
		return repo.save(p);
	}

}

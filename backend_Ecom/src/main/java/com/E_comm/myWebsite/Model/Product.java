package com.E_comm.myWebsite.Model;

import java.math.BigDecimal;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
@Entity
@Table(name="product")
public class Product {
		@Id  
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "id", nullable = false, updatable = false)
	private int id;
	private String category;
	private String name;
	private BigDecimal price;
	private int quantity;
	private String describtion;
	private String brand;
	@Column(name="releasedate")
	@JsonFormat(shape=Shape.STRING, pattern="DD-MM-YYYY")
	private Date releaseDate;
	private boolean avalibilty;
	@Column(name="imagename")
	private String imageName;
	@Column(name="imagetype")
	private String imageType;
	@Lob
	@Column(name="imagedate")
	private byte[] imageDate;
	public Date getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	public String getImageType() {
		return imageType;
	}
	public void setImageType(String imageType) {
		this.imageType = imageType;
	}
	public byte[] getImageDate() {
		return imageDate;
	}
	public void setImageDate(byte[] imageDate) {
		this.imageDate = imageDate;
	}
	public Product() {
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getDescribtion() {
		return describtion;
	}
	public void setDescribtion(String describtion) {
		this.describtion = describtion;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public Date getReleasDate() {
		return releaseDate;
	}
	public void setReleasDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}
	public boolean isAvalibilty() {
		return avalibilty;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public void setAvalibilty(boolean avalibilty) {
		this.avalibilty = avalibilty;
	}
	public Product(int id, String name, BigDecimal price, int quantity, String describtion, String brand,
			Date releaseDate, boolean avalibilty, String category, String imageName,
			String imageType, byte[] imageDate) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.describtion = describtion;
		this.brand = brand;
		this.releaseDate = releaseDate;
		this.avalibilty = avalibilty;
		this.category=category;
		this.imageName=imageName;
		this.imageType=imageType;
		this.imageDate= imageDate;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", category=" + category + ", name=" + name + ", price=" + price + ", quantity="
				+ quantity + ", describtion=" + describtion + ", brand=" + brand + ", releaseDate=" + releaseDate
				+ ", avalibilty=" + avalibilty + ", imageName=" + imageName + ", imageType=" + imageType + "]";
	}
	


}

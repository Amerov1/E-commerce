package com.E_comm.myWebsite.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.E_comm.myWebsite.Model.Product;

@Repository
public interface RepoProducts extends JpaRepository<Product, Integer> {

}

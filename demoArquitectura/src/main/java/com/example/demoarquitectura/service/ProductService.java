package com.example.demoarquitectura.service;

import com.example.demoarquitectura.entity.Product;
import com.example.demoarquitectura.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public List<Product> getAll(){
        return productRepository.getAll();
    }
    public Product save(Product p){
        return productRepository.save(p);
    }
}

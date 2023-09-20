package com.example.tiendaproductos.service;

import com.example.tiendaproductos.entity.Product;
import com.example.tiendaproductos.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Product> getById (String id){ return productRepository.getById(id);}
}

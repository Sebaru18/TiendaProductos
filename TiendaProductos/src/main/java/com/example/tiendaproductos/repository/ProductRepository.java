package com.example.tiendaproductos.repository;

import com.example.tiendaproductos.entity.Product;
import com.example.tiendaproductos.repository.crud.ProductCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ProductRepository {

    @Autowired
    private ProductCrudRepository productCrudRepository;

    public List<Product> getAll(){
        return (List<Product>) productCrudRepository.findAll();
    }

    public Optional<Product> getById(String id ){
        try{ System.out.println(productCrudRepository.findById(Integer.parseInt(id)));}
        catch(Exception e){return null;}
        return productCrudRepository.findById(Integer.parseInt(id));}
    public Product save(Product p){
        System.out.println(p);
        return productCrudRepository.save(p);
    }

}

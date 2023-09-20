package com.example.tiendaproductos.controller;

import com.example.tiendaproductos.entity.Product;
import com.example.tiendaproductos.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/save")
    public Product save(@RequestBody Product p){
        return productService.save(p);
    }

    @GetMapping("/all")
    public List<Product> getAll(){
        return productService.getAll();
    }

    @GetMapping("/get-by-id")
    public Optional<Product> getById(@RequestParam String id){ return  productService.getById(id);}

}

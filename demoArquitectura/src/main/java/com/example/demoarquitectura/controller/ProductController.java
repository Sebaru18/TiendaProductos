package com.example.demoarquitectura.controller;

import com.example.demoarquitectura.entity.Product;
import com.example.demoarquitectura.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;
    @GetMapping("/hola")
    public String saludar(){
        return "Hola Mundo!!";
    }

    @PostMapping("/save")
    public Product save(@RequestBody Product p){
        return productService.save(p);
    }

    @GetMapping("/all")
    public List<Product> getAll(){
        return productService.getAll();
    }

}

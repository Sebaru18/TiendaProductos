package com.example.demoarquitectura.repository.crud;

import com.example.demoarquitectura.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductCrudRepository extends CrudRepository<Product,Integer> {
}

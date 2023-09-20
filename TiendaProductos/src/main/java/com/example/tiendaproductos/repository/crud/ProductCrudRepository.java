package com.example.tiendaproductos.repository.crud;

import com.example.tiendaproductos.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductCrudRepository extends CrudRepository<Product,Integer> {
}

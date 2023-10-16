package com.example.products.controller;

import com.example.products.entity.products;
import com.example.products.repository.productsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class productscontroller {

    private final productsRepo productRepository;

    @Autowired
    public productscontroller(productsRepo productRepository) {
        this.productRepository = productRepository;
    }

    @PostMapping("/add")
    public String addProduct(@RequestBody products product) {
        productRepository.save(product);
        return "Product added successfully";
    }
}

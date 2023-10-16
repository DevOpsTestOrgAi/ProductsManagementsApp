package com.example.products.repository;

import com.example.products.entity.products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface productsRepo extends JpaRepository<products, Long> {
}

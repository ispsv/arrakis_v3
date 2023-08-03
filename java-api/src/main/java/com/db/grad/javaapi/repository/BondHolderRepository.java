package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.BondHolder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BondHolderRepository extends JpaRepository<BondHolder, Integer> {
}

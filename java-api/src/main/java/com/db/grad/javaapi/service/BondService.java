package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.repository.BondRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BondService {

    @Autowired
    BondRepository bondRepository;

    @Autowired
    public BondService(BondRepository bondRepository) {
        this.bondRepository = bondRepository;
    }

    public Bond getBondById(Integer bondId) {
        if (bondRepository.existsById(bondId)) {
            return bondRepository.getReferenceById(bondId);
        } else {
            return null;
        }
    }

    public List<Bond> getAllBonds() {
        return bondRepository.findAll();
    }
}

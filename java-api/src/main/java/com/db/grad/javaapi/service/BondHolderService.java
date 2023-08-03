package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.BondHolder;
import com.db.grad.javaapi.repository.BondHolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BondHolderService {

    @Autowired
    BondHolderRepository bondHolderRepository;

    @Autowired
    public BondHolderService(BondHolderRepository bondHolderRepository) {
        this.bondHolderRepository = bondHolderRepository;
    }

    public BondHolder getBondById(Integer bondHolderId) {
        if (bondHolderRepository.existsById(bondHolderId)) {
            return bondHolderRepository.getReferenceById(bondHolderId);
        } else {
            return null;
        }
    }

    public List<BondHolder> getAllBonds() {
        return bondHolderRepository.findAll();
    }
}
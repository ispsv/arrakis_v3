package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.BondHolder;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.BondHolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BondHolderService {

    @Autowired
    BondHolderRepository bondHolderRepository;

    @Autowired
    public BondHolderService(BondHolderRepository bondHolderRepository) {
        this.bondHolderRepository = bondHolderRepository;
    }

    public BondHolder addBondHolder(BondHolder bondHolder) {
        return bondHolderRepository.save(bondHolder);
    }

    public BondHolder getBondHolderById(Integer bondHolderId) {
        Optional<BondHolder> bondHolder = bondHolderRepository.findById(bondHolderId);
        return bondHolder.orElse(null);
    }

    public List<BondHolder> getAllBondHolders() {
        return bondHolderRepository.findAll();
    }

    public boolean deleteBondHolderById(Integer bondHolderId) {
        boolean deleted = false;

        Optional<BondHolder> bondHolder = bondHolderRepository.findById(bondHolderId);
        if (bondHolder.isPresent()) {
            bondHolderRepository.delete(bondHolder.get());
            deleted = true;
        }

        return deleted;
    }
}
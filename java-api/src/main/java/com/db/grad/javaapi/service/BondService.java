package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.BondRepository;
import com.db.grad.javaapi.repository.TradeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BondService {

    @Autowired
    BondRepository bondRepository;

    @Autowired
    TradeRepository tradeRepository;

    @Autowired
    public BondService(BondRepository bondRepository, TradeRepository tradeRepository) {
        this.bondRepository = bondRepository;
        this.tradeRepository = tradeRepository;
    }

    public Bond addBond(Bond bond) {
        return bondRepository.save(bond);
    }

    public Bond getBondById(Integer bondId) {
        Optional<Bond> bond = bondRepository.findById(bondId);
        return bond.orElse(null);
    }

    public List<Bond> getAllBonds() {
        return bondRepository.findAll();
    }

    public boolean deleteBondById(Integer bondId) {
        boolean deleted = false;

        Optional<Bond> bond = bondRepository.findById(bondId);
        if (bond.isPresent()) {
            bondRepository.delete(bond.get());
            deleted = true;
        }

        return deleted;
    }

    public Set<Trade> getTradesByBondId(Integer bondId) {
        List<Trade> allTrades = tradeRepository.findAll();
        Set<Trade> tradesForBondId = new HashSet<>();
        for (Trade t : allTrades) {
            if(Objects.equals(t.getBond().getBondId(), bondId)) {
                tradesForBondId.add(t);
            }
        }

        return tradesForBondId;
    }
}

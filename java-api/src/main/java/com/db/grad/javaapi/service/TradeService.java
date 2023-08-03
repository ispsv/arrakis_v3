package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.BondRepository;
import com.db.grad.javaapi.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeService {
    @Autowired
    private TradeRepository tradeRepository;

    @Autowired
    public TradeService(TradeRepository tradeRepository) {
        this.tradeRepository = tradeRepository;
    }

    public Trade getTradeById(Integer tradeId) {
        if (this.tradeRepository.existsById(tradeId)) {
            return this.tradeRepository.getReferenceById(tradeId);
        } else {
            return null;
        }
    }

    public List<Trade> getAllTrades() {
        return this.tradeRepository.findAll();
    }

}

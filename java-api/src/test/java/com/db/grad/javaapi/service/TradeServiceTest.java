package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class TradeServiceTest {

    @Mock
    private TradeRepository tradeRepository;

    @InjectMocks
    private TradeService tradeService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAddTrade() {
        // Arrange
        Trade trade = new Trade();
        trade.setTradeId(1);

        when(tradeRepository.save(trade)).thenReturn(trade);

        // Act
        Trade savedTrade = tradeService.addTrade(trade);

        // Assert
        assertNotNull(savedTrade);
        assertEquals(trade, savedTrade);
        verify(tradeRepository, times(1)).save(trade);
    }

    @Test
    void testGetTradeById() {
        // Arrange
        int tradeId = 1;
        Trade trade = new Trade();
        trade.setTradeId(tradeId);

        when(tradeRepository.findById(tradeId)).thenReturn(Optional.of(trade));

        // Act
        Trade retrievedTrade = tradeService.getTradeById(tradeId);

        // Assert
        assertNotNull(retrievedTrade);
        assertEquals(tradeId, retrievedTrade.getTradeId());
        assertEquals(trade, retrievedTrade);
        verify(tradeRepository, times(1)).findById(tradeId);
    }

    @Test
    void testGetTradeById_NotFound() {
        // Arrange
        int tradeId = 2;

        when(tradeRepository.findById(tradeId)).thenReturn(Optional.empty());

        // Act
        Trade retrievedTrade = tradeService.getTradeById(tradeId);

        // Assert
        assertNull(retrievedTrade);
        verify(tradeRepository, times(1)).findById(tradeId);
    }

    @Test
    void testGetAllTrades() {
        // Arrange
        List<Trade> trades = Collections.singletonList(new Trade());

        when(tradeRepository.findAll()).thenReturn(trades);

        // Act
        List<Trade> allTrades = tradeService.getAllTrades();

        // Assert
        assertEquals(1, allTrades.size());
        verify(tradeRepository, times(1)).findAll();
    }

    @Test
    void testDeleteTradeById() {
        // Arrange
        int tradeId = 1;
        Trade trade = new Trade();
        trade.setTradeId(tradeId);

        when(tradeRepository.findById(tradeId)).thenReturn(Optional.of(trade));

        // Act
        boolean isDeleted = tradeService.deleteTradeById(tradeId);

        // Assert
        assertTrue(isDeleted);
        verify(tradeRepository, times(1)).findById(tradeId);
        verify(tradeRepository, times(1)).delete(trade);
    }

    @Test
    void testDeleteTradeById_NotFound() {
        // Arrange
        int tradeId = 2;

        when(tradeRepository.findById(tradeId)).thenReturn(Optional.empty());

        // Act
        boolean isDeleted = tradeService.deleteTradeById(tradeId);

        // Assert
        assertFalse(isDeleted);
        verify(tradeRepository, times(1)).findById(tradeId);
        verify(tradeRepository, never()).delete(any());
    }
}

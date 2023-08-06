package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.service.TradeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TradeControllerTest {

    @Mock
    private TradeService tradeService;

    @InjectMocks
    private TradeController tradeController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllTrades() {
        // Arrange
        List<Trade> expectedTrades = new ArrayList<>();
        expectedTrades.add(new Trade());
        expectedTrades.add(new Trade());
        when(tradeService.getAllTrades()).thenReturn(expectedTrades);

        // Act
        List<Trade> actualTrades = tradeController.getAllTrades();

        // Assert
        assertEquals(expectedTrades, actualTrades);
    }

    @Test
    void testGetTrade_ValidId() {
        // Arrange
        int tradeId = 1;
        Trade expectedTrade = new Trade();
        when(tradeService.getTradeById(tradeId)).thenReturn(expectedTrade);

        // Act
        ResponseEntity<Trade> response = tradeController.getTrade(tradeId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedTrade, response.getBody());
    }

}


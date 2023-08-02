package com.db.grad.javaapi.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "trades")
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tradeId;

    @Column(nullable = false)
    private String tradeType;

    @Column(nullable = false)
    private String tradeCurrency;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private Timestamp tradeSettlementDate;

    @Column(nullable = false)
    private String tradeStatus;

    @Column(nullable = false)
    private Timestamp tradeDate;

    @ManyToOne
    @JoinColumn(name = "book_id")
    @Column(nullable = false)
    private Book book;

    @ManyToOne
    @JoinColumn(name = "bond_id")
    @Column(nullable = false)
    private Bond bond;

    public Integer getTradeId() {
        return tradeId;
    }

    public void setTradeId(Integer tradeId) {
        this.tradeId = tradeId;
    }

    public String getTradeType() {
        return tradeType;
    }

    public void setTradeType(String tradeType) {
        this.tradeType = tradeType;
    }

    public String getTradeCurrency() {
        return tradeCurrency;
    }

    public void setTradeCurrency(String tradeCurrency) {
        this.tradeCurrency = tradeCurrency;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Timestamp getTradeSettlementDate() {
        return tradeSettlementDate;
    }

    public void setTradeSettlementDate(Timestamp tradeSettlementDate) {
        this.tradeSettlementDate = tradeSettlementDate;
    }

    public String getTradeStatus() {
        return tradeStatus;
    }

    public void setTradeStatus(String tradeStatus) {
        this.tradeStatus = tradeStatus;
    }

    public Timestamp getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(Timestamp tradeDate) {
        this.tradeDate = tradeDate;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Bond getBond() {
        return bond;
    }

    public void setBond(Bond bond) {
        this.bond = bond;
    }
}

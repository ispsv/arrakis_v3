INSERT INTO users (user_id, user_name, password) VALUES (1, 'admin', 'password');
INSERT INTO users (user_id, user_name, password) VALUES (2, 'test', 'test');

INSERT INTO books (book_id, book_name) VALUES (1, 'trading_book_1');
INSERT INTO books (book_id, book_name) VALUES (2, 'trading_book_2');
INSERT INTO books (book_id, book_name) VALUES (3, 'trading_book_3');
INSERT INTO books (book_id, book_name) VALUES (4, 'trading_book_4');
INSERT INTO books (book_id, book_name) VALUES (5, 'trading_book_5');
INSERT INTO books (book_id, book_name) VALUES (6, 'trading_book_6');

INSERT INTO user_book_relationship (user_id, book_id) VALUES (1, 1);
INSERT INTO user_book_relationship (user_id, book_id) VALUES (1, 2);
INSERT INTO user_book_relationship (user_id, book_id) VALUES (1, 3);
INSERT INTO user_book_relationship (user_id, book_id) VALUES (1, 4);
INSERT INTO user_book_relationship (user_id, book_id) VALUES (2, 5);
INSERT INTO user_book_relationship (user_id, book_id) VALUES (2, 6);

INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('AZ Holdings Inc', '2021-08-05', 4.37, 'USD', '', 1000, 'XS1988387210', '"BNPParibasIssu 4.37% Microsoft Corp (USD)"', 'active', 'CORP');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Acme co', '2021-07-30', 3.15, 'USD', '123456780', 900, 'USN0280EAR64', 'Airbus 3.15%  USD', 'active', 'CORP');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Acme Co', '2021-07-30', 3.15, 'USD', '123456780', 900, 'USN0280EAR64', 'Airbus 3.15%  USD', 'active', 'CORP');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Sovereign Investments', '2021-09-30', 2, 'USD', '123456bh0', 900, 'A12356111', 'UBS Facebook (USD)', 'active', 'CORP');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Astra Trading Ltd', '2021-07-30', 3.15, 'USD', '123456780', 900, 'USN0280EAR64', 'Airbus 3.15%  USD', 'active', 'CORP');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Muncipal Gov Of Orange County', '2021-08-03', 3.15, 'USD', 'AMZN 3.15 08/22/27 REGS', 900, 'USU02320AG12', 'Amazon', 'active', 'CORP');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Goldman Sachs', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460505', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Goldman Sachs', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460506', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('UBS', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460507', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('UBS', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460508', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Barclays', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460509', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Barclays', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460510', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Barclays', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460511', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('British Telecom', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460512', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Pension Holdings', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460513', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Pension Holdings', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460514', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Pension Holdings', '2021-08-09', 0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460515', 'HM Treasury United Kingdon', 'active', 'GOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Zurich Pension fund 4', '2021-08-06', 2.02, 'USD', '87973RAA8', 690, 'US87973RAA86', 'TEMASEK FINL I LTD GLOBAL MEDIUM TERM NTS BOOK ENTRY REG S', 'active', 'SOVN');
INSERT INTO bonds (bond_holder, bond_maturity_date, coupon_percent, currency, cusip, face_value_mn, isin, issuer_name, status, type) VALUES ('Zurich Pension fund 4', '2030-12-22', 1.123, 'USD', '87973RAA8', 340, 'IE00B29LNP31', 'First Norway Alpha Kl.IV', 'active', 'SOVN');

INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 90, '2021-05-13', 50, '2021-08-04', 'open', 1, 1);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('sell', 'GBP', 89.56, '2021-02-04', 40, '2021-08-04', 'open', 1, 1);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 105.775, '2021-05-13', 1000, '2021-08-23', 'open', 2, 2);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('sell', 'GBP', 105.775, '2021-02-04', 900, '2021-09-10', 'open', 3, 2);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 90, '2021-05-13', 50, '2021-08-23', 'open', 4, 3);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 105.775, '2021-05-13', 1000, '2021-08-23', 'open', 5, 2);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('sell', 'USD', 90, '2021-05-13', 50, '2021-08-23', 'open', 4, 2);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'GBP', 98.56, '2021-02-04', 60, '2021-09-27', 'open', 6, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 98.56, '2021-08-23', 50, '2021-08-23', 'open', 6, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'GBP', 110.35, '2021-09-27', 1100, '2021-09-27', 'open', 7, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('sell', 'GBP', 110.35, '2021-09-28', 900, '2021-09-28', 'open', 8, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'GBP', 110.35, '2021-09-29', 2000, '2021-09-29', 'open', 9, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('sell', 'GBP', 110.35, '2021-09-30', 2000, '2021-09-30', 'open', 10, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'GBP', 110.35, '2021-10-01', 1000, '2021-10-01', 'open', 11, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'GBP', 110.35, '2019-10-02', 900, '2019-10-02', 'open', 12, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('sell', 'GBP', 110.35, '2019-10-03', 1900, '2019-10-03', 'open', 13, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'GBP', 110.35, '2018-10-04', 600, '2018-10-04', 'open', 14, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'GBP', 110.35, '2019-10-05', 600, '2019-10-05', 'open', 15, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'GBP', 110.35, '2021-06-06', 700, '2021-06-06', 'open', 16, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('sell', 'GBP', 110.35, '2011-10-07', 1300, '2021-10-07', 'open', 17, 6);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 100.13, '2012-02-04', 60, '2021-09-27', 'open', 18, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 100.13, '2012-08-23', 50, '2021-08-23', 'open', 18, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 100.13, '2013-02-04', 75, '2021-09-27', 'open', 18, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 100.13, '2014-08-23', 50, '2021-08-23', 'open', 18, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 98.76, '2016-02-04', 300, '2021-09-27', 'open', 19, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 98.76, '2012-08-23', 300, '2021-08-23', 'open', 19, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('buy', 'USD', 98.76, '2013-02-04', 300, '2021-09-27', 'open', 19, 4);
INSERT INTO trades (type, currency, unit_price, date, quantity, settlement_date, status, bond_id, book_id) VALUES ('sell', 'USD', 98.76, '2015-08-23', 300, '2021-08-23', 'open', 19, 4);
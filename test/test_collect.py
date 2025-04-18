from source.yfinance.collect import get_sp500_tickers


def test_get_sp500_tickers() -> None: 
    assert get_sp500_tickers == []

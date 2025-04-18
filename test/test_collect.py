"""
Test collect functions from yfinance module
"""

from source.yfinance import get_sp500_tickers

def test_get_sp500_tickers() -> None:
    """
    Get SP500 tickers test
    """
    assert get_sp500_tickers == []

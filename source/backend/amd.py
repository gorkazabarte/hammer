"""Analysis of AMD stock price using mplfinance and yfinance."""

from datetime import datetime
from mplfinance import plot
from yfinance import download, Ticker

amd = Ticker("AMD")
data = amd.history(start="2024-01-01", end=datetime.now())
data = data[["Open", "High", "Low", "Close", "Volume"]]
plot(data, type='candle', style='charles', volume=True, title="AMD Stock Price", ylabel='Price ($)', ylabel_lower='Volume', figratio=(16, 9), figscale=1.2)

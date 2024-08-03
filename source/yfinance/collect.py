from pandas import read_html
from urllib.error import URLError

SP500_TICKERS_URL: str = 'https://en.wikipedia.org/wiki/list_of_S%26P_500_companies'

def get_sp500_tickers() -> list:
    """
    Get tickers of companies in SP500 index
    """

    tickers: list = []
    try: 
        sp500_table = read_html(SP500_TICKERS_URL)[0]
        tickers = sp500_table['Symbol'].tolist()
    except URLError as e: 
        print(f'[ERROR] {e.reason}')
    return [ticker.replace('.', '-') for ticker in tickers]



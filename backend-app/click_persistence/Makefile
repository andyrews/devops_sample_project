install:
	python.exe -m pip install --upgrade pip &&\
	pip install -r requirements.txt

format:
	black *.py

lint:
	pylint --disable=R,C *.py

test:
	python -m pytest -vv --cov=click_persistence tests/*.py

all: install format lint test

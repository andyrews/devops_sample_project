install:
	python.exe -m pip install --upgrade pip &&\
	pip install -r requirements.txt

format:
	black *.py

lint:
	pylint --disable=R,C *.py

test:
	python -m pytest -vv --cov=leaderboards tests/*.py

all: install format lint test

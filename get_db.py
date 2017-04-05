from peewee import *

psql_db = PostgresqlDatabase('gombaspeteer', user='gombaspeteer')


class BaseModel(Model):

    class Meta:
        database = psql_db


class Boards(BaseModel):

    title = CharField()


class Cards(BaseModel):

    title = CharField()
    board_title = ForeignKeyField(Boards, related_name='boards_list')
from peewee import *

psql_db = PostgresqlDatabase('judit', user='judit')


class BaseModel(Model):

    class Meta:
        database = psql_db


class Boards(BaseModel):

    title = CharField()


class Cards(BaseModel):

    title = CharField()
    board_id = ForeignKeyField(Boards, related_name='cards_list')

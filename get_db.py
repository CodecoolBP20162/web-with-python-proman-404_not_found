from peewee import *

psql_db = PostgresqlDatabase('lxndrvn', user='lxndrvn')


class BaseModel(Model):

    class Meta:
        database = psql_db


class Boards(BaseModel):
    title = CharField()


class Cards(BaseModel):
    title = CharField()
    content = CharField()
    status = CharField()
    board = ForeignKeyField(Boards, related_name='board')

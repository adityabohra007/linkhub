# # import graphene
# # from graphene_django import DjangoObjectType
# # from link.models import Link, UserLink, Theme
# # from userauth.models import UserProfile
# # from django.contrib.auth.models import User


# # class LinkType(DjangoObjectType):
# #     class Meta:
# #         model = Link
# #         fields = ("id",
# #                   "user",
# #                   "is_live",
# #                   "is_valid",
# #                   "title",
# #                   "url",
# #                   "thumbnail",
# #                   "priority",
# #                   "schedule",
# #                   "lock_type",
# #                   "date_of_birth",
# #                   "code",
# #                   "redirect_link"
# #                   )


# # class UserProfileType(DjangoObjectType):
# #     class Meta:
# #         model = UserProfile
# #         fields = ('user')


# # class UserType(DjangoObjectType):
# #     class Meta:
# #         model = User
# #         fields = ('username', 'first_name', "last_name")


# import graphene
# from graphene_django import DjangoObjectType

# from .models import Category, Ingredient


# class CategoryType(DjangoObjectType):
#     class Meta:
#         model = Category
#         fields = ("id", "name", "ingredients")


# class IngredientType(DjangoObjectType):
#     class Meta:
#         model = Ingredient
#         fields = ("id", "name", "notes", "category")


# class Query(graphene.ObjectType):
#     all_ingredients = graphene.List(IngredientType)
#     category_by_name = graphene.Field(
#         CategoryType, name=graphene.String(required=True))

#     def resolve_all_ingredients(root, info):
#         # We can easily optimize query count in the resolve method
#         return Ingredient.objects.select_related("category").all()

#     def resolve_category_by_name(root, info, name):
#         try:
#             return Category.objects.get(name=name)
#         except Category.DoesNotExist:
#             return None


# schema = graphene.Schema(query=Query)

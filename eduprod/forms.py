from django import forms
from .models import Question

class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['question_text', 'answer_text1', 'answer_text2', 'answer_text3', 'answer_text4']
        
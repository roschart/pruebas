require File.expand_path(File.dirname(__FILE__) + '/edgecase')

class AboutNil < EdgeCase::Koan
  def test_nil_is_an_object
    #old assert_equal __, nil.is_a?(Object), "Unlike NULL in other languages"
    assert_equal true, nil.is_a?(Object), "Unlike NULL in other languages"
  end

  def test_you_dont_get_null_pointer_errors_when_calling_methods_on_nil
    # What happens when you call a method that doesn't exist.  The
    # following begin/rescue/end code block captures the exception and
    # make some assertions about it.
    begin
      nil.some_method_nil_doesnt_know_about
    rescue Exception => ex
      # What exception has been caught?
      #old assert_equal __, ex.class
      assert_equal NoMethodError, ex.class

      # What message was attached to the exception?
      # (HINT: replace __ with part of the error message.)
      #old assert_match(/__/, ex.message)
      assert_match(/undefined method/, ex.message)
    end
  end

  def test_nil_has_a_few_methods_defined_on_it
    assert_equal true, nil.nil?
    assert_equal "", nil.to_s
    assert_equal "nil", nil.inspect

    # THINK ABOUT IT:
    #
    # Is it better to use
    #    obj.nil?
    # or
    #    obj == nil
    # Why?
    a="hola"
    b=nil
    assert_equal false, a.nil?
    assert_equal false, a==nil
    assert_equal true , b.nil?
    assert_equal true , b==nil
    #Despúes de esta pequeñan prueba no sé la respuesta
    #intuyo que a.nil? es la correcta pero aun no estoy familiarizdo con las
    #extructuras de ruby
  end

end
